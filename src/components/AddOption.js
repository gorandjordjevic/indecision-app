import React from 'react';

export default class AddOption extends React.Component {

    state = {
        err: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const err = this.props.handleAddOption(option);

        if (!err) e.target.elements.option.value = '';

        this.setState(() => ({ err }));
    }

    render() {
        return (
            <div>
                {this.state.err && <p>{this.state.err}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}