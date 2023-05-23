import "./reviewer.scss";

export default function Reviewer() {
    return (
        <>
            <section className="reviewer_section">
                <div className="reviewer_thema">
                CREATIVITY iS CONTAGIOUS, <p>pass it on</p> 
                </div>
                <div className="reviewer_user">
                    <div className="user_logo">@</div>
                    <div className="user_data">
                        <p>First name</p>
                        <p>Last name</p>
                        <p>email</p>
                    </div>
                </div>
                <div className="button_publish">
                    publish
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                            <th>Country</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    )
}