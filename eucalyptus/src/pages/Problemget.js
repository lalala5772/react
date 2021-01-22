import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import "./problemget.css"

function problemList({pnum, pname, solved, snum}) {
    return(
        <div className = "problemlist">
        <Link to = {{
            pathname: `/problem/${pnum}`,
            state: {
                pnum,
                pname,
                solved,
                snum
            }
        }}>

        <div className = "problemset">
            <table border = "1">
                <tr>
                    <td>{pnum}</td> <td>{pname}</td> <td>{solved}</td> <td>{snum}</td>
                </tr>
            </table>

        </div> 

        </Link>
        </div>
    )
}

problemList.propTypes = {
    //id: PropTypes.number.isRequired,
    pnum: PropTypes.number.isRequired,
    pname: PropTypes.string.isRequired,
    solved: PropTypes.bool.isRequired,
    snum: PropTypes.number.isRequired
};

export default problemList;