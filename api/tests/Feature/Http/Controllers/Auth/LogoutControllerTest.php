<?php

declare(strict_types=1);

namespace Tests\Feature\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class LogoutControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @return void
     */
    public function testSuccess(): void
    {
        $user = User::factory()->create(['email' => 'test@example.com']);

        $this->actingAs($user)
            ->postJson('/logout')
            ->assertStatus(200)
            ->assertJson([
                'message' => 'Unauthenticated.',
            ]);

        $this->assertGuest();
    }

    /**
     * @return void
     */
    public function testAlreadyUnauthenticated(): void
    {
        $this->postJson('/logout')
            ->assertStatus(200)
            ->assertJson([
                'message' => 'Already Unauthenticated.',
            ]);

        $this->assertGuest();
    }
}
