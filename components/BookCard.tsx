import React from "react";

const BookCard = () => {
  return (
    <div className="flex justify-between hover:cursor-pointer items-center">
      <p className="text-muted-foreground">The Alamanack of Naval Ravikant</p>
      <span className="text-muted-foreground">by Eric Jorgensen</span>
    </div>
  );
};

export default BookCard;
