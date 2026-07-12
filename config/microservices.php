<?php

return [

    'finance' => [
        'url'     => env('FINANCE_SERVICE_URL', 'http://localhost:8001'),
        'token'   => env('FINANCE_SERVICE_TOKEN'),
        'timeout' => env('FINANCE_SERVICE_TIMEOUT', 10),
    ],

];
