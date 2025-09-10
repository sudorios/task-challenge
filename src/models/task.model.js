import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    hecha: { type: Boolean, default: false },
    activa: { type: Boolean, default: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);