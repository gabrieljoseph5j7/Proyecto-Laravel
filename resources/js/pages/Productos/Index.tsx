import { Head, router, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
interface Producto {
    id: number;
    categoria: string;
    n_serie: string;
    descripcion: string;
    marca: string;
    modelo: string;
    precio: string;
}
interface PageProps extends Record<string, unknown> {
    productos: Producto[];
}
export default function Index() {
    const { productos } = usePage<PageProps>().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
    
        categoria: '',
        n_serie: '',
        descripcion: '',
        marca: '',
        modelo: '',
        precio: '',
    });
    const handleDelete = (id: number) => {
        router.delete(`/productos/${id}`);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.post('/productos', formData, {
            onSuccess: () => {
                setFormData({ categoria: '', n_serie: '', descripcion: '', marca: '', modelo: '', precio: '' });
                setIsModalOpen(false);
            },
        });
    };
    return (
        <>
            <Head title="Productos" />
            <h1 style={{ color: 'purple' }} className="flex justify-center text-5xl font-bold bg-black-50" >Productos</h1>
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
                            <th>Número de Serie</th>
                            <th>Descripcion</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">
                                <h2 className="mb-4 text-lg font-bold">Nuevo Producto</h2>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="categoria" className="mb-1 block font-semibold">Categoría</label>
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
                                        <label htmlFor="n_serie" className="mb-1 block font-semibold">N° Serie</label>
                                        <input
                                            type="text"
                                            id="n_serie"
                                            name="n_serie"
                                            value={formData.n_serie}
                                            onChange={(event) => setFormData({ ...formData, n_serie: event.target.value })}
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
                                    <div>
                                        <label htmlFor="marca" className="mb-1 block font-semibold">Marca</label>
                                        <input
                                            type="text"
                                            id="marca"
                                            name="marca"
                                            value={formData.marca}
                                            onChange={(event) => setFormData({ ...formData, marca: event.target.value })}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="modelo" className="mb-1 block font-semibold">Modelo</label>
                                        <input
                                            type="text"
                                            id="modelo"
                                            name="modelo"
                                            value={formData.modelo}
                                            onChange={(event) => setFormData({ ...formData, modelo: event.target.value })}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="precio" className="mb-1 block font-semibold">Precio</label>
                                        <input
                                            type="number"
                                            id="precio"
                                            name="precio"
                                            value={formData.precio}
                                            onChange={(event) => setFormData({ ...formData, precio: event.target.value })}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400"
                                        />
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
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{producto.categoria}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{producto.n_serie}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{producto.descripcion}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{producto.marca}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">{producto.modelo}</td>
                                <td className="border-collapse font-semibold border border-gray-400 p-4 font-mono text-gray-500">${producto.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
