<?php

namespace App\Controller\API;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{

    private UserRepository $userRepository;
    private EntityManagerInterface $entityManager;


    public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/api/user/{id}', name: 'app_user', methods: ['GET'])]
    public function index(int $id): JsonResponse
    {
        return $this->json($this->userRepository->findBy(["id_google" => $id]));
    }

    #[Route('/api/user/add', methods: ['POST'])]
    public function addUser(Request $request): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        if(!isset($payload['name']) || !isset($payload['email']) || !isset($payload['image']) || !isset($payload['roles']) || !isset($payload['password']) || !isset($payload['id_google'])) {
            return $this->returnError('Il manque des paramètres');
        }

        $user = new User();
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $this->json($user);
    }

    /**
     * @throws OptimisticLockException
     * @throws ORMException
     */
    #[Route('/api/user/delete/{id}', name: 'api_user_delete', methods: ['DELETE'])]
    public function deleteUser(User $user): JsonResponse
    {
        $this->userRepository->remove($user);
        return $this->json(['status' => true,]);
    }

    private function returnError(string $errorMessage): JsonResponse
    {
        return $this->json([
            'error' => true,
            'message' => $errorMessage,
        ]);
    }
}
