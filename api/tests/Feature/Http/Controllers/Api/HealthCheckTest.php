<?php

declare(strict_types=1);

namespace Tests\Feature\HealthCheckTest;

use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    /**
     * health-check test
     *
     * @return void
     */
    public function testHealthCheck(): void
    {
        $response = $this->get('api/health-check');

        $response->assertStatus(200);
    }
}
