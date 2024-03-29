<?php

interface SerializeTypeInterface
{
    public function serialize($data): string;
}

abstract class AbstractSerializer
{
    protected $data = [];
    protected $serializer;

    abstract public function __construct(SerializeTypeInterface $serializer);

    abstract public function cache(): void;
}

?>

<?php

/*
 * You are working on billing system implementation and as part of the transactions storage module, you need to create
 * a class “Serializer”, which extends an existing abstract class “AbstractSerializer” and implements the requirements
 * below.
 *
 * Requirements:
 *   - Complete a constructor of “Serializer” class with a new functionality,
 *     which will accept an instance of “SerializeTypeInterface” as “$serializer”
 *     parameter and put it in the “$serializer” property.
 *   - Complete a method “cache” of “Serializer” class with functionality,
 *     which accepts an unlimited number of parameters of any type and assigns
 *     all of them to the “$data” property.
 *   - Create a new class “GenericSerializeType”, inherits an existing interface
 *     “SerializeTypeInterface” and implements a standard serialization PHP way
 *     of “$data” property, when a whole instance of “Serializer” class attempts
 *     to be serialized.
 *   - Create a new class “JsonSerializeType”, inherits an existing interface
 *     “SerializeTypeInterface” and implements a Json-encoded representation of
 *     “$data” property, when a whole instance of “Serializer” class attempts to
 *     be serialized.
 */

class GenericSerializeType implements SerializeTypeInterface
{
    public function serialize($data): string
    {
        return serialize($data);
    }
}

class JsonSerializeType implements SerializeTypeInterface
{
    public function serialize($data): string
    {
        return json_encode($data);
    }
}

class Serializer
{

    public ?SerializeTypeInterface $serializer = null;
    public $data;

    public function __construct(SerializeTypeInterface $serializer)
    {
        $this->serializer = $serializer;

    }

    public function cache(...$args)
    {
        $this->data = [...$args];

    }

    public function __serialize()
    {
        return $this->serializer->serialize($this->data);

    }

    public function __toString()
    {
        return $this->serializer->serialize($this->data);

    }

}

$fptr = fopen(getenv('OUTPUT_PATH'), 'w');

$data = [];

while ($_ = fgets(STDIN)) {
    eval(sprintf('$data[] = %s;', trim($_)));
}

$result = print_r(
    [
        'generic' => call_user_func(
            function (Serializer $serializer) use ($data): string {
                $serializer->cache(
                    ...$data
                );

                return (string)$serializer;
            },
            new Serializer(new GenericSerializeType())
        ),
        'json' => call_user_func(
            function (Serializer $serializer) use ($data): string {
                $serializer->cache(
                    ...$data
                );

                return (string)$serializer;
            },
            new Serializer(new JsonSerializeType())
        ),
    ],
    true
);

fwrite($fptr, $result);

fclose($fptr);
