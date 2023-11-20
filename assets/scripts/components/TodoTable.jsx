import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContext";

const TodoTable = () => {

    const context = useContext(TodoContext);

    return (
        <div>
            <div className="wrapper mt-5">
                <div className="box">
                    <div className="table__wrapper">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Numer zamówienia</th>
                                <th>Email w zamówieniu</th>
                                <th>Data zamówienia</th>
                                <th>Status zamówienia</th>
                                <th>Status realizacji zamówienia</th>
                                <th>Wartość zamówienia</th>
                                <th>Punktów do zdobycia</th>
                                <th>Status punktów za zamówienie</th>
                                <th>Czy zwrot</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="no-wrap">1</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr><tr>
                                <td className="no-wrap">1</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr><tr>
                                <td className="no-wrap">1</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoTable;