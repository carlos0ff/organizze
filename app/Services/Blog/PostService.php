<?php

namespace App\Services\Blog;

use App\Contracts\Blog\PostServiceInterface;
use App\Models\Blog\Post;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

/**
 * Serviço responsável pelas operações de CRUD e publicação de posts do blog.
 *
 * @package App\Services\Blog
 */
class PostService implements PostServiceInterface
{
    /**
     * Retorna a listagem paginada de posts com filtros opcionais por status e categoria.
     *
     * @param  array                 $filters  Filtros opcionais: status, category, per_page
     * @return LengthAwarePaginator            Posts paginados ordenados por data de criação decrescente
     */
    public function list(array $filters = []): LengthAwarePaginator
    {
        $query = Post::query()->orderBy('created_at', 'desc');

        if (!empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        if (!empty($filters['category'])) {
            $query->where('category_id', $filters['category']);
        }

        return $query->paginate($filters['per_page'] ?? 15);
    }

    /**
     * Cria um novo post no banco de dados.
     *
     * @param  array  $data  Dados do post (título, slug, conteúdo, categoria, tags)
     * @return Post          Post recém-criado
     */
    public function create(array $data): Post
    {
        return Post::create($data);
    }

    /**
     * Atualiza os dados de um post existente.
     *
     * @param  Post   $post  Post a ser atualizado
     * @param  array  $data  Dados a atualizar
     * @return Post          Post atualizado e recarregado do banco
     */
    public function update(Post $post, array $data): Post
    {
        $post->update($data);

        return $post->fresh();
    }

    /**
     * Remove um post do banco de dados.
     *
     * @param  Post  $post  Post a ser removido
     * @return void
     */
    public function delete(Post $post): void
    {
        $post->delete();
    }

    /**
     * Publica um post em rascunho, atualizando status e registrando a data de publicação.
     *
     * @param  Post  $post  Post a ser publicado
     * @return Post         Post atualizado e recarregado do banco
     */
    public function publish(Post $post): Post
    {
        $post->update([
            'status'       => 'published',
            'published_at' => now(),
        ]);

        return $post->fresh();
    }
}
