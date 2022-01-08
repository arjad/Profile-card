import React from "react";

export default class FetchRandomUser extends React.Component 
{

  state = {
    loading: true,
    person: null
  };

  async componentDidMount() 
  {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() 
  {
    if (this.state.loading) 
    {
      return <div>Fetching!!! loading...</div>;
    }

    if (!this.state.person) 
    {
      return <div>Error!!! didn't get a person</div>;
    }

    return (
  <div className=" big">
    <h1 className="mb-5"> Getting data from api </h1>

      <div class="card">
          <div class="header">
              <div class="hamburger-menu">
                  <div class="center"></div>
              </div>
              <a href="#" class="mail">
                  <i class="far fa-envelope"></i>
              </a>
              <div class="main">
                  <div src={this.state.person.picture.medium} style={{backgroundImage:`url(${this.state.person.picture.medium})`,backgroundSize: `cover`}} class="image"></div>
                     
                  
                  <h3 class="name">{this.state.person.name.first}  {this.state.person.name.last}</h3>
                  <h3 class="sub-name">{this.state.person.location.street.name}</h3>
              </div>
          </div>

          <div class="content">
              <div class="left">
              <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">Gender</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" value={this.state.person.gender} />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">User</label>
      </div>
      <div class="col-75">
        <input type="text" className="" id="lname" value={this.state.person.login.username} name="lastname" />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Email</label>
      </div>
      <div class="col-75">
        <input type="text" className="" id="lname" value={this.state.person.email} name="lastname" />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Age</label>
      </div>
      <div class="col-75">
        <input type="text" className="" value={this.state.person.registered.age} id="lname" name="lastname" />
      </div>
    </div>
   <br/>
    <div class="row">
      <button type="submit" value="Submit" className="btn btn-primary">Read More</button>
    </div>
  </form>
                
              </div>
           </div> 
           
      </div>
  </div>);
  }
}
