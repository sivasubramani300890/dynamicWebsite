import React, { Component,useState } from 'react';

class ProgramList extends Component{
    constructor(props){
        super(props);
        this.state = { 
            allDet : [
                { id:123,category:'Entertainment',subcat:'Sports',title:'Ind Vs Aus',text:'Best Rivalry Series ever',time:'3 PM'},
                { id:124,category:'Entertainment',subcat:'Serial',title:'Pandian Stores',text:'Best Family Drama',time:'8 PM'},
                { id:125,category:'Entertainment',subcat:'Reality Show',title:'Big Boss',text:'Best Reality Show',time:'10 PM'}
            ],
            watch : 'Watch It'
        }

    }
    
    addToWatchHandler = () => {
        this.setState({watch : 'Watched'});
    }

    render(){
        return(
            <div className="container"><h2 style={{marginBottom:'10px'}}>Program List</h2>
                <div className="row">
                    { this.state.allDet ? this.state.allDet.map((x,i) => (
                        <div key={i} className="col-md-3">
                        <div className="card" >
                            <div className="card-header">
                                {x.category}
                                <span className="badge bg-warning float-right" style={{textAlign:'right'}}>{x.subcat}</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <p className="card-text">{x.text}</p>
                                <button onClick={this.addToWatchHandler} className="btn btn-primary" >{this.state.watch}</button>
                            </div>
                            <div className="card-footer text-muted">
                                {x.time}
                            </div>
                        </div>
                </div>

                    )) : null }
                    
                </div>
            </div>
           
        );
    }
}

export default ProgramList;