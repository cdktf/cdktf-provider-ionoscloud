# `dataIonoscloudKafkaClusterTopic` Submodule <a name="`dataIonoscloudKafkaClusterTopic` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudKafkaClusterTopic <a name="DataIonoscloudKafkaClusterTopic" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic ionoscloud_kafka_cluster_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster_topic

dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Kafka Cluster that the topic belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of your Kafka Cluster Topic. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using the name filter. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the Kafka Cluster that the topic belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#cluster_id DataIonoscloudKafkaClusterTopic#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.location"></a>

- *Type:* str

The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#location DataIonoscloudKafkaClusterTopic#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.id"></a>

- *Type:* str

The ID of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#id DataIonoscloudKafkaClusterTopic#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.name"></a>

- *Type:* str

The name of your Kafka Cluster Topic.

Must be 63 characters or less and must begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#name DataIonoscloudKafkaClusterTopic#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.partialMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#partial_match DataIonoscloudKafkaClusterTopic#partial_match}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetPartialMatch">reset_partial_match</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_partial_match` <a name="reset_partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetPartialMatch"></a>

```python
def reset_partial_match() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudKafkaClusterTopic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster_topic

dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster_topic

dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster_topic

dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster_topic

dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudKafkaClusterTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudKafkaClusterTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudKafkaClusterTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudKafkaClusterTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.numberOfPartitions">number_of_partitions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.retentionTime">retention_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.segmentBytes">segment_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatchInput">partial_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `number_of_partitions`<sup>Required</sup> <a name="number_of_partitions" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.numberOfPartitions"></a>

```python
number_of_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_time`<sup>Required</sup> <a name="retention_time" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.retentionTime"></a>

```python
retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_bytes`<sup>Required</sup> <a name="segment_bytes" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.segmentBytes"></a>

```python
segment_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partial_match_input`<sup>Optional</sup> <a name="partial_match_input" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatchInput"></a>

```python
partial_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partial_match`<sup>Required</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudKafkaClusterTopicConfig <a name="DataIonoscloudKafkaClusterTopicConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_kafka_cluster_topic

dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Kafka Cluster that the topic belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.location">location</a></code> | <code>str</code> | The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.id">id</a></code> | <code>str</code> | The ID of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.name">name</a></code> | <code>str</code> | The name of your Kafka Cluster Topic. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using the name filter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the Kafka Cluster that the topic belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#cluster_id DataIonoscloudKafkaClusterTopic#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#location DataIonoscloudKafkaClusterTopic#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#id DataIonoscloudKafkaClusterTopic#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of your Kafka Cluster Topic.

Must be 63 characters or less and must begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#name DataIonoscloudKafkaClusterTopic#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/data-sources/kafka_cluster_topic#partial_match DataIonoscloudKafkaClusterTopic#partial_match}

---



