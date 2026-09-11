import { Head, router } from '@inertiajs/react';
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

interface Props {
    producto: Producto;
}

export default function Edit({ producto }: Props) {
    const [formData, setFormData] = useState({
        categoria: producto.categoria,
        n_serie: producto.n_serie,
        descripcion: producto.descripcion,
        marca: producto.marca,
        modelo: producto.modelo,
        precio: producto.precio,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.put(`/productos/${producto.id}`, formData, {
            onSuccess: () => {
                alert('Producto actualizado exitosamente.');
            },
        });
    };

    return (
        <>
            <Head title="Editar Producto" />

            <div className="mx-auto max-w-md p-6">
                <h1 className="mb-6 text-3xl font-bold">
                    Editar Producto
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <label
                            htmlFor="categoria"
                            className="mb-1 block font-semibold"
                        >
                            Categoría
                        </label>

                        <input
                            type="text"
                            id="categoria"
                            value={formData.categoria}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    categoria: event.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="n_serie"
                            className="mb-1 block font-semibold"
                        >
                            N° Serie
                        </label>

                        <input
                            type="text"
                            id="n_serie"
                            value={formData.n_serie}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    n_serie: event.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="descripcion"
                            className="mb-1 block font-semibold"
                        >
                            Descripción
                        </label>

                        <textarea
                            id="descripcion"
                            value={formData.descripcion}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    descripcion: event.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="marca"
                            className="mb-1 block font-semibold"
                        >
                            Marca
                        </label>

                        <input
                            type="text"
                            id="marca"
                            value={formData.marca}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    marca: event.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="modelo"
                            className="mb-1 block font-semibold"
                        >
                            Modelo
                        </label>

                        <input
                            type="text"
                            id="modelo"
                            value={formData.modelo}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    modelo: event.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="precio"
                            className="mb-1 block font-semibold"
                        >
                            Precio
                        </label>

                        <input
                            type="number"
                            id="precio"
                            value={formData.precio}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    precio: event.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                        Guardar cambios
                    </button>

                    <button
                        type="button"
                        onClick={() => router.get('/productos')}
                        className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </>
    );
}