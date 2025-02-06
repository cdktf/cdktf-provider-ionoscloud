# `dataIonoscloudKafkaCluster` Submodule <a name="`dataIonoscloudKafkaCluster` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudKafkaCluster <a name="DataIonoscloudKafkaCluster" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster ionoscloud_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of your Kafka Cluster. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using the name filter. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.location"></a>

- *Type:* str

The location of your Kafka Cluster. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#location DataIonoscloudKafkaCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.id"></a>

- *Type:* str

The ID of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#id DataIonoscloudKafkaCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#name DataIonoscloudKafkaCluster#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.Initializer.parameter.partialMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#partial_match DataIonoscloudKafkaCluster#partial_match}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetPartialMatch">reset_partial_match</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_partial_match` <a name="reset_partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.resetPartialMatch"></a>

```python
def reset_partial_match() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudKafkaCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.brokerAddresses">broker_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList">DataIonoscloudKafkaClusterConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.partialMatchInput">partial_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `broker_addresses`<sup>Required</sup> <a name="broker_addresses" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.brokerAddresses"></a>

```python
broker_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.connections"></a>

```python
connections: DataIonoscloudKafkaClusterConnectionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList">DataIonoscloudKafkaClusterConnectionsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partial_match_input`<sup>Optional</sup> <a name="partial_match_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.partialMatchInput"></a>

```python
partial_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partial_match`<sup>Required</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudKafkaClusterConfig <a name="DataIonoscloudKafkaClusterConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.location">location</a></code> | <code>str</code> | The location of your Kafka Cluster. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.id">id</a></code> | <code>str</code> | The ID of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.name">name</a></code> | <code>str</code> | The name of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using the name filter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of your Kafka Cluster. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#location DataIonoscloudKafkaCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#id DataIonoscloudKafkaCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#name DataIonoscloudKafkaCluster#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConfig.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/kafka_cluster#partial_match DataIonoscloudKafkaCluster#partial_match}

---

### DataIonoscloudKafkaClusterConnections <a name="DataIonoscloudKafkaClusterConnections" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudKafkaClusterConnectionsList <a name="DataIonoscloudKafkaClusterConnectionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudKafkaClusterConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudKafkaClusterConnectionsOutputReference <a name="DataIonoscloudKafkaClusterConnectionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster

dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.brokerAddresses">broker_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnections">DataIonoscloudKafkaClusterConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `broker_addresses`<sup>Required</sup> <a name="broker_addresses" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.brokerAddresses"></a>

```python
broker_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudKafkaClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaCluster.DataIonoscloudKafkaClusterConnections">DataIonoscloudKafkaClusterConnections</a>

---



