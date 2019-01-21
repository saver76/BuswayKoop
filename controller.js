module.exports = function(model){
    this.model = model;

    this.get = function (req, res){
        console.log('test');
    }
}