import React from 'react';
import AvatarSelector from '../../components/avatar-selector/avatar-selector';
import '../../index.css'


class HRProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            company: '',
            money: '',
            posDesc: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(key, val){
        this.setState({
            [key]:val
        })
    }

    render(){
        let inputElemTitle;
        let inputElemCompany;
        let inputElemMoney;
        let inputElemPosDesc;
        return(
                <div>
                    <nav className="navbar navbar-expand-md bg-dark fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/HR-profile" style={{color : "#FFF"}}>HR-profile</a>
                            </div>
                        </div>
                    </nav>

                    <div className="container">
                        <AvatarSelector></AvatarSelector>
                        <input
                            placeholder="Hiring Position"
                            className="form-control mb-3"
                            value={this.state.title}
                            onChange={()=>this.onChange('title',inputElemTitle.value)}
                            ref={node=> inputElemTitle = node}/>

                        <input
                            placeholder="Company name"
                            className="form-control mb-3"
                            value={this.state.company}
                            onChange={()=>this.onChange('company',inputElemCompany.value)}
                            ref={node=> inputElemCompany = node}/>

                        <input
                            placeholder="Salary offering"
                            className="form-control mb-3"
                            value={this.state.money}
                            onChange={()=>this.onChange('money',inputElemMoney.value)}
                            ref={node=> inputElemMoney = node}/>

                        <input
                            placeholder="Position requirement"
                            className="form-control mb-3"
                            value={this.state.posDesc}
                            onChange={()=>this.onChange('posDesc',inputElemPosDesc.value)}
                            ref={node=> inputElemPosDesc = node}/>
                    </div>

                </div>
            )

    }
}

export default HRProfile;