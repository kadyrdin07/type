import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Checkbox, TextField, Button } from "@mui/material";
import scss from "./Cards.module.scss";

function Cards() {
	const todos = useSelector((state) => state);
	const dispatch = useDispatch();
	const [todo, setTodo] = useState("");
	const [editId, setEditId] = useState(null);
	const [editedTodo, setEditedTodo] = useState("");

	const addTodo = () => {
		dispatch({ type: "ADD_TODO", payload: { id: Math.random(), name: todo } });
		setTodo("");
	};
	const deleteTodo = (id) => {
		dispatch({ type: "DELETE", payload: { id } });
	};
	const editTodo = (id, name) => {
		setEditId(id);
		setEditedTodo(name);
	};
	const saveEdit = () => {
		dispatch({
			type: "EDIT_TODO",
			payload: { id: editId, name: editedTodo },
		});
		setEditId(null);
		setEditedTodo("");
	};

	const toggleCompleted = (id) => {
		dispatch({ type: "TOGGLE_COMPLETED", payload: { id } });
	};
	const deleteAll =() => {
		dispatch({type:"deleteAll"})
	}

	return (
		<section>
			<div>
				<div className={scss.container}>
					<TextField
						type="text"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						fullWidth
						label="KADYRDIN"
						id="KADYRDIN"
					/>
					<Button onClick={addTodo} variant="contained">
						Send
					</Button>
					<Button onClick={deleteAll}>delete</Button>
				</div>

				{todos.map((item) => (
					<div className={scss.edit} key={item.id}>
						{editId === item.id ? (
							<div className={scss.save}>
								<TextField
									type="text"
									value={editedTodo}
									onChange={(e) => setEditedTodo(e.target.value)}
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
								/>
								<Button onClick={saveEdit} variant="contained" color="success">
									save
								</Button>
						
							</div>
						) : (
							<>
								<div className={scss.button1}>
									<h3
										style={{
											textDecoration: item.completed ? "line-through" : "none",
										}}>
										{item.name}
									</h3>

									<Button
										onClick={() => deleteTodo(item.id)}
										variant="outlined"
										color="error">
										DELETE
									</Button>

									<Button
										onClick={() => editTodo(item.id, item.name)}
										color="secondary">
										EDIT
									</Button>

									<Checkbox
										checked={item.completed}
										onChange={() => toggleCompleted(item.id)}
									/>
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

export default Cards;
