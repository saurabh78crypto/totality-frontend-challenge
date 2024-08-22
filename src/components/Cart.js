import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Divider } from '@mui/material';
import { AddCircle, RemoveCircle, Delete } from '@mui/icons-material';

const Cart = ({ cartItems, onUpdateItem, onRemoveItem }) => {
  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id} secondaryAction={
            <div>
              <IconButton onClick={() => onUpdateItem(item, item.quantity + 1)}>
                <AddCircle />
              </IconButton>
              <IconButton onClick={() => onUpdateItem(item, item.quantity - 1)}>
                <RemoveCircle />
              </IconButton>
              <IconButton onClick={() => onRemoveItem(item)}>
                <Delete />
              </IconButton>
            </div>
          }>
            <ListItemText primary={item.title} secondary={`$${item.price} x ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" align="right">
        Total: ${getTotalCost()}
      </Typography>
    </div>
  );
};

export default Cart;
