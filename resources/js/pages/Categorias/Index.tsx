import { Head, router, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
interface Categoria {
    id: number;
    categoria: string;
    nombre: string;
    descripcion: string;
}
interface PageProps extends Record<string, unknown> {
    categorias: Categoria[];
}
export default function Index() {
    const { categorias } = usePage<PageProps>().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        categoria: '',
        nombre: '',
        descripcion: '',
    });
    const handleDelete = (id: number) => {
        router.delete(`/categorias/${id}`);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.post('/categorias', formData, {
            onSuccess: () => {
                setFormData({ categoria: '', nombre: '', descripcion: '' });
                setIsModalOpen(false);
            },
        });
    };
    return (
        <>
            <Head title="Categorias" />
            <h1 style={{ color: 'purple' }} className="flex justify-center text-5xl font-bold bg-black-50" >Categorias</h1>
            <div className= "flex justify-center items-center m-8 bg-black-50">
                <button
                    onClick={() => setIsModalOpen(true)}

                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                    + Añadir nuevo
                </button>
                <table>
                    <thead style={{ borderCollapse: 'collapse', borderSpacing: '0' }}>
                        <tr className="border-collapse bg-red-200 border border-black-200 text-1xs font-semibold text-gray-600 uppercase"> 
                            <th>Categoria</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                        </tr>
                    </thead>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">
                                <h2 className="mb-4 text-lg font-bold">Nueva Categoría</h2>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="categoria" className="mb-1 block font-semibold">Categoria</label>
                                        <input
                                            type="text"
                                            id="categoria"
                                            name="categoria"
                                            value={formData.categoria}
                                            onChange={(event) => setFormData({ ...formData, categoria: event.target.value })}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="nombre" className="mb-1 block font-semibold">Nombre</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={(event) => setFormData({ ...formData, nombre: event.target.value })}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="descripcion" className="mb-1 block font-semibold">Descripcion</label>
                                        <textarea
                                            id="descripcion"
                                            name="descripcion"
                                            value={formData.descripcion}
                                            onChange={(event) => setFormData({ ...formData, descripcion: event.target.value })}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                    >
                                        Guardar
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                    <tbody className="divide-y divide-gray-200 text-sm" style={{ borderCollapse: 'collapse', borderSpacing: '0' }}>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{categoria.categoria}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{categoria.nombre}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{categoria.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}