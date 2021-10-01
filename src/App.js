import './App.css';

function App() {
  return (
    <Router>
          
          <AuthProvider>
          
              <Switch>
                {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
                
                {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                
                <Route exact path="/" component={Landing} />
                <Route path="/chat" component={Chat_api} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/about" component={AboutUs} />
                <PrivateRoute path="/add_details" component={Add_details} />
                <PrivateRoute path="/ask_question" component={AskQuestion} />
                <PrivateRoute path="/myprofile" component={Myprofile} />
                <PrivateRoute path="/locationwise" component={LocationWise} />
          
                <div className="outer">
                    <div className="inner">
                    
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    
                    </div>
                </div>
                
              </Switch>
          </AuthProvider>
        </Router>
  );
}

export default App;
