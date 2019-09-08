var PascalEdges = /** @class */ (function () {
    function PascalEdges() {
    }
    PascalEdges.prototype.LeftEdge = function () {
        return 1;
    };
    PascalEdges.prototype.RightEdge = function () {
        return 1;
    };
    PascalEdges.prototype.BeyondEdge = function () {
        return null;
    };
    return PascalEdges;
}());
function pascal(p) {
    var recursePasal = function (c, r) {
        if (c === 0) {
            return p.LeftEdge();
        }
        else if (c === r) {
            return p.RightEdge();
        }
        else if (c > r) {
            return p.BeyondEdge();
        }
        return recursePasal(c, r - 1) + recursePasal(c - 1, r - 1);
    };
    return recursePasal;
}
console.log(pascal(new PascalEdges())(2, 3));
