import React from 'react'
import '../assets/showList.css'

export function ShowList (props) {
    return (
        <div className="mainDiv">
            <div className="title">tựa</div>
            <div className="subDiv">
                <div className="pic">pic</div>
                <div className="sideDiv">
                    <div className="author">tac gia</div>
                    <div className="publisher">người sản xuất</div>
                    <div className="published">ngay san xuat</div>
                    <div className="description">mo ta</div>
                </div>
            </div>
        </div>
    )
}