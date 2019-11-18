import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents:[]
            //
    }

    this.reriveData();
    this.increamentCounter =this.increamentCounter.bind(this)
    }
    updateState(data){
        this.setState({
            contents:data
        })               
    }
       increamentCounter(id){
        console.log(`${id} was searched`),
        $.ajax({
            type: "POST",
            url: "/shares",
            data:{
                user_id: id
            }, 
            datatype: "json",
            success:function(){
                console.log("success");
            },
            error: function(request, status, error) {
                  console.log("error post");
                }
          });
       }

           
      reriveData() {
        console.log("get datat from client");
        var that = this;
        $.ajax({
          type: "GET",
          url: "/content",  
          datatype: "json",
          success:function(data){
              that.updateState(data);
              console.log(data);
          },
          error: function(request, status, error) {
                console.log(error);
              }
        });
      }

      renderList() {

       const arr = this.state.contents[0];
         return (   
            <div id="content2">
            <h1>{arr.title}</h1>
            <div className="social-shares">
                <div className="share-count" id="counter_shares">{arr.shares}<span> Shares</span></div>
                    <div className="social">
                        <a className="facebook" href="https://web.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fweb.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.iflscience.com%252Fspace%252Fmeet-arrokoth-the-official-new-name-of-the-furthest-world-ever-explored-%252F&cancel_url=https%3A%2F%2Fweb.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ar_AR">
                            <img id="id_social" src="http://www.boldmethod.com/images/social/share-facebook-long-v2.png" onClick={this.increamentCounter(arr._id)}/>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://twitter.com/intent/tweet?text=Meet%20Arrokoth,%20The%20Official%20New%20Name%20Of%20The%20Furthest%20World%20Ever%20Explored%20via%20@IFLScience:&url=https%3A%2F%2Fwww.iflscience.com%2Fspace%2Fmeet-arrokoth-the-official-new-name-of-the-furthest-world-ever-explored-%2F" className="twitter">
                        <img id="id_social" src="https://images.squarespace-cdn.com/content/v1/563e2841e4b09a6ae020bd67/1530018807349-YP4LPA0C7INKN2XL0IM2/ke17ZwdGBToddI8pDm48kMJPBCPJsiaclxZdF5CWJnlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMrHLJAYcctYfGny_wGpS1LuO2Ox8Cjc1KavDC4kMrXc/button+share+on+twitter.png" onClick={this.increamentCounter(arr._id)}/>
                        </a>
                </div>									
            </div>  
            <img id="img" src={arr.image}></img>
              <div className="author" >
                    <img id="author_img"src={arr.ImgAuther}/>
                        <h5 className="name">{arr.Auther}</h5>
                        <span className="date">{arr.date}</span>
                       </div>      	
                        <div className="article-content">
                              <p>{arr.description}</p>
                       </div>
                  </div>  
               )
           }
        render(){
            if(this.state.contents.length){
                return (
                <div>{this.renderList()}</div>
                );
            }
            else
            {
                return (
                <div>Loading...</div>
                );
            }}}
ReactDOM.render(<App />, document.getElementById("content"))