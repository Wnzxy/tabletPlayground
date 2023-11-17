function Game() {
    return (
        <div className="game">
            <div className="">
                <div className="board-row">
                    <select className="dropdown-menu">
                        <option className="dropdown-item">Rock</option>
                        <option className="dropdown-item">Paper</option>
                        <option className="dropdown-item">Scissorcs</option>
                    </select>
                    <p>Rock</p>
                </div>
                <button className="bg-slate-950 text-white"> Play</button>
            </div>
        </div>
    );

}

export default Game;