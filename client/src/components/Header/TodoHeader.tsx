import React from "react"
import styles from './index.module.less'
export default function TodoHeader() {
    return (
        <header className={styles['todo-header']}>
            <div className={styles['title']}>Todo List</div>
            <input className={styles['input']} type="text" placeholder="What needs to be done?" />
        </header>
    )
}