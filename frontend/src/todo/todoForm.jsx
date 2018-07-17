import React from 'react';
import Grid from './grid';
import IconButton from '../template/iconButton';

export default props => (

    <div role="form" className="todoForm">
        <Grid cols='12 9 10'>
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" type="text" value={props.description} onChange={props.handleChange}/>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton onClick={props.handleAdd} estilo='primary' icon='plus' />
            <IconButton onClick={props.handleSearch} estilo='info' icon='search' />
            <IconButton onClick={props.handleClear} estilo='default' icon='close' />
        </Grid>
    </div>

)
