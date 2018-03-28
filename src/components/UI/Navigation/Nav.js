import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import './Nav.css';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        // static propTypes = {
        //     children: PropTypes.node.isRequired,
        //     defaultValue: PropTypes.number.isRequired,
        // };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

const ListExampleSelectable = () => (
    <MuiThemeProvider>
        <SelectableList defaultValue={1}>
            <Subheader>
                <div className="Top-title">
                    <h5> Hakob</h5>
                    <h5> Sukiasyan</h5>
                    <span className="brown-text light">Web Developer</span>
                </div>
            </Subheader>
            <ListItem
                to='/'
                value={1}
                leftAvatar={<i className="material-icons">account_balance</i>}
                primaryText="Home"
                containerElement={<Link to="/" />} />

            <ListItem
                value={2}
                leftAvatar={<i className="material-icons">account_circle</i>}
                primaryText="About"
                containerElement={<Link to="/about" />} />
            <ListItem
                value={3}
                leftAvatar={<i className="material-icons">show_chart</i>}
                primaryText="Experience"
                containerElement={<Link to="/experience" />} />
            <ListItem
                value={4}
                leftAvatar={<i className="material-icons">insert_chart</i>}
                primaryText="Skills"
                containerElement={<Link to="/skills" />} />
            <ListItem
                value={5}
                leftAvatar={<i className="material-icons">build</i>}
                primaryText="Works"
                containerElement={<Link to="/works" />} />
            <ListItem
                value={6}
                leftAvatar={<i className="material-icons">chrome_reader_mode</i>}
                primaryText="Blog"
                containerElement={<Link to="/blog" />} />
            <ListItem
                value={7}
                leftAvatar={<i className="material-icons">account_balance</i>}
                primaryText="Education"
                containerElement={<Link to="/education" />} />
            <ListItem
                value={8}
                leftAvatar={<i className="material-icons">create</i>}
                primaryText="Resume"
                containerElement={<Link to="/resume" />} />
            <ListItem
                value={9}
                leftAvatar={<i className="material-icons">contact_mail</i>}
                primaryText="Contacts"
                containerElement={<Link to="/contacts" />} />

        </SelectableList>
    </MuiThemeProvider>
);

export default ListExampleSelectable;