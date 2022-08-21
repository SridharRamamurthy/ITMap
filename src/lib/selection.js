
function Selection(props) {

    return (
        <div className="d-flex flex-row justify-content-between">
            <div className="p-2 ">
                <label className="fw-bold" style={{ fontSize: "24px" }}>
                    {props.title}
                </label>
            </div>
            <div class="d-flex ">
                <div className="p-2 " style={{ cursor: 'pointer' }}>
                    <i className="fa fa-filter fa-2x" ></i>
                </div>
                <div className="p-2" style={{ cursor: 'pointer' }} onClick={e => {
                    props.setMode("list")
                }}> <i className="fa fa-list fa-2x" ></i></div>
                <div className="p-2 text-primary" style={{ cursor: 'pointer' }} onClick={e => {
                    props.setMode("card")
                }}>   <i className="fa fa-bars fa-2x" ></i></div>
            </div>
        </div>)
}

export default Selection