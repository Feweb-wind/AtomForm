import { FormInstance } from "antd/es/form";
import { useHistory } from "react-router-dom";
import { Key, useEffect, useState } from "react";
import qs from 'qs'
export const useQuery: (form?: FormInstance, params?: Record<Key, unknown>, decodeData?: (params: any) => Record<Key, unknown>)
    => [Record<Key, unknown>, React.Dispatch<React.SetStateAction<Record<Key, unknown>>>] = (form, ininQuery = {}, decodeData) => {
        const history = useHistory()
        const url = history.location.search
        const params = qs.parse(url.split('?')[1])
        const [query, setQuery] = useState<Record<Key, unknown>>({
            ...ininQuery,
            ...params
        })
        useEffect(() => {
            Object.keys(query).forEach((key) => {
                const item = query[key]
                if (item === '' || item === null) {
                    delete query[key]
                }
            })
            history.replace(`?${qs.stringify(query)}`)
        }, [query])
        return [query, setQuery]
    }