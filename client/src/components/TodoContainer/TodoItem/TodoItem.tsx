import React from "react";
import styles from './index.module.less'
export default function TodoItem() {
    return (
        <div className={[styles['todo-item']].join(' ')}>
            <i className="iconfont icon-checkbox"></i>
            <span className={styles['todo-title']}>学习react hooks</span>
            <i className="iconfont icon-delete"></i>
        </div>
    )
}