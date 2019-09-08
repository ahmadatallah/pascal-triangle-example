interface EdgesInterface {
  LeftEdge: () => number;
  RightEdge: () => number;
  BeyondEdge: () => number;
}

class PascalEdges implements  EdgesInterface {
   constructor() {}
   LeftEdge() {
      return 1
   }

   RightEdge() {
      return 1
   }

   BeyondEdge() {
      return null 
   }
}  

function pascal(p: PascalEdges): (c: number, r: number) => number {
   const recursePasal =  (c: number, r: number): number => {
      if(c === 0 ) {
         return p.LeftEdge();
      } else if (c === r) {
         return p.RightEdge();
      } else if (c > r) {
         return p.BeyondEdge();
      }
      return recursePasal(c, r - 1) + recursePasal(c - 1, r - 1)
   };
  
   return recursePasal
}

console.log(pascal(new PascalEdges())(2, 3))
