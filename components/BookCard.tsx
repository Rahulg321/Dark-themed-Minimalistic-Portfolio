import React from "react";

const BookCard = () => {
  return (
    <div className="flex justify-between hover:cursor-pointer items-center">
      <h4 className="text-muted-foreground">The Alamanack of Naval Ravikant</h4>
      <span className="text-muted-foreground">by Eric Jorgensen</span>
    </div>
  );
};

export default BookCard;
