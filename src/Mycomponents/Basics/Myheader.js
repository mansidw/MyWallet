import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../css/myheader.css'
import { slide as Menu } from 'react-burger-menu'

const Myheader = () => {
    return (
        <Menu>
                <Button color="primary" className="button" component={RouterLink} to="/myhome" size="large" variant="contained" style={{'backgroundColor':'#2C394B','marginTop':'20px','margin':'10px','textDecoration':'none','paddingTop':'10px'}}>
                    My Information
                </Button>
                <Button color="primary" className="button" component={RouterLink} to="/upload" size="large" variant="contained" style={{'backgroundColor':'#2C394B','margin':'10px','textDecoration':'none','paddingTop':'10px'}}>
                    Upload Image
                </Button>
                <Button color="primary" className="button" component={RouterLink} to="/cart" size="large" variant="contained" style={{'backgroundColor':'#2C394B','margin':'10px','textDecoration':'none','paddingTop':'10px'}}>
                    My Cart
                </Button>
                <Button color="primary" className="button" component={RouterLink} to="/history" size="large" variant="contained" style={{'backgroundColor':'#2C394B','margin':'10px','textDecoration':'none','paddingTop':'10px'}}>
                    History
                </Button>
                 <Button color="primary" className="button" component={RouterLink} to="/" size="large" variant="contained" style={{'backgroundColor':'#2C394B','marginTop':'20px','margin':'10px','textDecoration':'none','paddingTop':'10px'}}>
                    Home
                </Button>
                
            </Menu>
    )
}

export default Myheader
