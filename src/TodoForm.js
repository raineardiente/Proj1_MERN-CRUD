import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const TodoForm = ({ todo }) => {

    const { register, handleSubmit} = useForm({
		defaultValues: { text: todo ? todo._text : ""},
	});
	const history = useHistory();

	const onSubmit = handleSubmit((data) => {
		alert(JSON.stringify(data))
		history.push("/");
	});


    return ( 
        
                <form onSubmit={onSubmit}>
                    <div className="form-group">				
                        <label htmlFor="text">Text:</label>
                        <input className="form-control" ref={register} type="text" name="text" id="text"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Create Todo
                        </button> 
                    </div>
                </form>
        );
}