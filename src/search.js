import React, { useEffect, useState } from 'react';
import Selection from "./lib/selection.js"

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            error: ''
        }
    }

    onSubmit = (e) => {
    }

    render = () => {
        return (
            <div>
                <Selection
                    title={"Search Applicant"} />
                <div className="flex-container" style={{ backgroundColor: "#c7ecf4" }}>
                    <div className="row pb-4" style={{ backgroundColor: "#c6ecf2" }}>
                        <div> 
                            <form onSubmit={this.onSubmit}>
                                <p className="error">
                                    {this.state.error}
                                </p>
                               
                                <div className="row">

                                    <div className="col-4 form-group mt-2">
                                        <label>Name</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeEmail} required />
                                    </div>
                                    <div className="col-4 form-group mt-2">
                                        <label>Phone</label>
                                        <input type="phone" className="form-control" value={this.state.phone} onChange={this.onChangeEmail} required />
                                    </div>

                                    <div className="col-4 form-group">
                                        <label>EMail</label>
                                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <button type="submit" className="btn btn-primary btn-block col-2 mx-2" onClick={this.onSubmit}>Search</button>
                                    <button type="submit" className="btn btn-primary btn-block col-2 mx-2" onClick={this.onRegister}>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row pb-4" style={{ border: "solid 4px #e1e1e1" }}>Result</div>
                </div>
            </div>
        )
    }
}
export default Search