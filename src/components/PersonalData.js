import React, { Component } from 'react'
import GithubRepos from './GithubRepos'

export class PersonalData extends Component {
    render() {
        return (
            <div className="PersonalData">
                <br/>
                <GithubRepos/>
            </div>
        )
    }
}

export default PersonalData
