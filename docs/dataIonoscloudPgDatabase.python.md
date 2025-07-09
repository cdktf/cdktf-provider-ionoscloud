# `dataIonoscloudPgDatabase` Submodule <a name="`dataIonoscloudPgDatabase` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudPgDatabase <a name="DataIonoscloudPgDatabase" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database ionoscloud_pg_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabase(
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
  name: str,
  timeouts: DataIonoscloudPgDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#cluster_id DataIonoscloudPgDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#name DataIonoscloudPgDatabase#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#cluster_id DataIonoscloudPgDatabase#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#name DataIonoscloudPgDatabase#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#timeouts DataIonoscloudPgDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#create DataIonoscloudPgDatabase#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#default DataIonoscloudPgDatabase#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#delete DataIonoscloudPgDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#update DataIonoscloudPgDatabase#update}.

---

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudPgDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudPgDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudPgDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudPgDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudPgDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference">DataIonoscloudPgDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.timeouts"></a>

```python
timeouts: DataIonoscloudPgDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference">DataIonoscloudPgDatabaseTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudPgDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudPgDatabaseConfig <a name="DataIonoscloudPgDatabaseConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  name: str,
  timeouts: DataIonoscloudPgDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#cluster_id DataIonoscloudPgDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#name DataIonoscloudPgDatabase#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#cluster_id DataIonoscloudPgDatabase#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#name DataIonoscloudPgDatabase#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudPgDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#timeouts DataIonoscloudPgDatabase#timeouts}

---

### DataIonoscloudPgDatabaseTimeouts <a name="DataIonoscloudPgDatabaseTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#create DataIonoscloudPgDatabase#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#default DataIonoscloudPgDatabase#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#delete DataIonoscloudPgDatabase#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#update DataIonoscloudPgDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#create DataIonoscloudPgDatabase#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#default DataIonoscloudPgDatabase#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#delete DataIonoscloudPgDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/pg_database#update DataIonoscloudPgDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudPgDatabaseTimeoutsOutputReference <a name="DataIonoscloudPgDatabaseTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_pg_database

dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudPgDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPgDatabase.DataIonoscloudPgDatabaseTimeouts">DataIonoscloudPgDatabaseTimeouts</a>]

---



