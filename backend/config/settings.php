<?php

declare(strict_types = 1);

use DI\Container;
use Monolog\Logger;
use Dotenv\Dotenv as Dotenv;
return function (Container $container) {

    $dotenv = Dotenv::createImmutable(dirname(__DIR__));
    $dotenv->load();

    $container->set('settings', function() {

        return [
            'name' => getenv("APPName"),
            'displayErrorDetails' => true,
            'logErrorDetails' => true,
            'logErrors' => true,
            'logger' => [
                'name' => 'slim-app',
                'path' => dirname(__DIR__) . "/logs/app.log",
                'level' => Logger::DEBUG
            ],
            'views' => [
                'path' => dirname(__DIR__). "/templates",
                'settings' => [
                    'cache' => false
                ]
            ],
            'email' => [
                'host'      => getenv('SMTPHost'),  // SMTP Host
                'port'      => getenv('SMTPPort'),  // SMTP Port
                'username'  => getenv('SMTPUser'),  // SMTP Username
                'password'  => getenv('SMTPPassword'),  // SMTP Password
                'protocol'  => getenv('SMTPProtocol')   // SSL or TLS
            ],
            'connection' => [
                'driver' => getenv("DBDriver"),
                'host' => getenv("DBHost"),
                'dbname' => getenv("DBName"),
                'dbuser' => getenv("DBUser"),
                'dbpass' => getenv("DBPassword"),
            ]

        ];

    });
};