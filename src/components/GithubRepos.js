import axios from "axios";
import { Repo } from "./Repo";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export class GithubRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  formatDate = date => {
    return date.getMonth() + "-" + date.getDay() + "-" + date.getFullYear();
  };

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://api.github.com/users/MarkFuller1/repos"
    }).then(data => this.setState({ repos: data.data }));
  }
  render() {
    //const classes = useStyles();
    return (
      <div clasName="GithubBlock">
        <TableContainer component={Paper}>
          <Table aria-label="Current Githut Repositories">
            <TableHead>
              <TableRow classname="MuiTableCell-head">
                <TableCell>Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">URL</TableCell>
                <TableCell align="center" sortDirection="desc">
                  Last Updated
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.repos.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">
                    <a href={"https://github.com/" + row.full_name}>
                      {row.full_name.split("/")[1]}
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    {this.formatDate(new Date(row.updated_at))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default GithubRepos;
