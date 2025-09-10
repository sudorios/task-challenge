import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    hecha: { type: Boolean, default: false },
    estado: { type: String, enum: ['pendiente', 'en_progreso', 'completada'], default: 'pendiente' }
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);