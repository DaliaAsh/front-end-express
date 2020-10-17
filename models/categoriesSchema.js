export const categorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});
export const Category = mongoose.model('Category', categorySchema);
