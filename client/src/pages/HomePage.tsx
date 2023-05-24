import React, { useState } from "react";
import styles from './index.module.less'
import Header from "../components/Header/TodoHeader";
import TodoContainer from "../components/TodoContainer/TodoContainer";
export default function HomePage() {
    const testData: any[] = useState<Array<any>>([])
    return (
        <div className={styles['homepage']}>
            <Header></Header>
            <TodoContainer></TodoContainer>
        </div>
    )
}