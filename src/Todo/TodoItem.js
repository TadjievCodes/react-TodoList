import React from 'react'
import PropTypes, { func } from 'prop-types'
import { findByLabelText } from '@testing-library/dom';


const styles = {
   li: {
   display: 'flex',
   justifyContent: 'space-between',
   alignITems: 'center',
   padding: '.5rem 1rem',
   border: '1px solid #ccc',
   borderRadius: '4px',
   marginBottom: '.5rem'

   },
   input: {
    marginRight: '1rem'
   }
}


function TodoItem({ todo, index, onChange }) {
    return(
       <li style={styles.li}> 
         <span>
            <input type='checkbox'  style={styles.input} 
            onChange= { () =>  onChange(todo.id) } 
            />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>

          <button className="rm">&times;</button>
       </li>

    
    );
}

TodoItem.propTypes = {
   todo: PropTypes.object.isRequired,
   index: PropTypes.number,
   onChange: PropTypes.func.isRequired
}


export default TodoItem