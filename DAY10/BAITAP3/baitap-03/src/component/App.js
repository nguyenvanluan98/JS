import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        }
    }
    handleChange = (e) => {
        this.setState({ item: e.target.value })
    }

    handleAddItem = () => {
        if (this.state.item) {
            const newList = this.state.list
            newList.push(this.state.item)
            this.setState({ list: newList, item: '' })
        }
    }

    render() {
        const { list, item } = this.state
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Todo list</h1>
                <input value={item} onChange={this.handleChange} />
                <button onClick={this.handleAddItem}>ADD</button>
                {list.map((item, index) => (
                    <p key={index}>
                        {item}
                    </p>
                ))}
            </div>

        )

    }
}
export default App;