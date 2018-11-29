import React, { Component } from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: false
    }
  }
  
  thongbao = function () {
    alert ('Bạn đã click')
  }
  thongbao2 = function (x) {
    alert(x)
  }

  renderButton = () => {
    return (
    <div className="row">
    <div className="btn-group">
      <div className="btn btn-secondary" onClick={() => this.editClick()}>Edit</div>
      <div className="btn btn-warning"  onClick = {() => this.thongbao2('đã bấm remove')}>Remove</div>
    </div>
  </div>
  ) 
}
 


  renderForm = () => {
    return(
    <div className="row">
    <div className="form-group">
      <input type="text" name="ten" className="form-control" defaultValue = {this.props.title} />
      
    </div>
    <div className="form-group">
      
      <div className="btn btn-success btn-block"onClick={() => this.saveClick()}>Save</div>
    </div>
  </div>
  )
}



trangThaiCheck = () => {
  if (this.state.trangThai === false) {
    return this.renderButton();
  }else{
    return this.renderForm();
  }
}
//khi click vào Edit trangThai sẽ thành true
editClick = () => {
  this.setState({
    trangThai: true
  });
}
//khi click vào Save trangThai sẽ thành true
saveClick = () => {
  this.setState({
    trangThai: false
  });
}






    render() {
        return (
            <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={"col-lg-6 " + this.props.vitriimg}>
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src= {this.props.img} alt />
                </div>
              </div>
              <div className={"col-lg-6 " + this.props.vitritext}>
                <div className="p-5">
                  <h2 className="display-4">{this.props.title}</h2>
                  <p>{this.props.content}</p>
                </div>
              </div>
            </div>

            {this.trangThaiCheck()}

          </div>
        </section>
      </div>
        );
    }
}

export default Section;