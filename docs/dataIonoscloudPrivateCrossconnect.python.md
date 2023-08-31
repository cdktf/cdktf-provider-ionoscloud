# `data_ionoscloud_private_crossconnect`

Refer to the Terraform Registory for docs: [`data_ionoscloud_private_crossconnect`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect).

# `dataIonoscloudPrivateCrossconnect` Submodule <a name="`dataIonoscloudPrivateCrossconnect` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudPrivateCrossconnect <a name="DataIonoscloudPrivateCrossconnect" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect ionoscloud_private_crossconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  timeouts: DataIonoscloudPrivateCrossconnectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#timeouts DataIonoscloudPrivateCrossconnect#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.connectableDatacenters">connectable_datacenters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList">DataIonoscloudPrivateCrossconnectConnectableDatacentersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.peers">peers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList">DataIonoscloudPrivateCrossconnectPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference">DataIonoscloudPrivateCrossconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `connectable_datacenters`<sup>Required</sup> <a name="connectable_datacenters" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.connectableDatacenters"></a>

```python
connectable_datacenters: DataIonoscloudPrivateCrossconnectConnectableDatacentersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList">DataIonoscloudPrivateCrossconnectConnectableDatacentersList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.peers"></a>

```python
peers: DataIonoscloudPrivateCrossconnectPeersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList">DataIonoscloudPrivateCrossconnectPeersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeouts"></a>

```python
timeouts: DataIonoscloudPrivateCrossconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference">DataIonoscloudPrivateCrossconnectTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudPrivateCrossconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudPrivateCrossconnectConfig <a name="DataIonoscloudPrivateCrossconnectConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  timeouts: DataIonoscloudPrivateCrossconnectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudPrivateCrossconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#timeouts DataIonoscloudPrivateCrossconnect#timeouts}

---

### DataIonoscloudPrivateCrossconnectConnectableDatacenters <a name="DataIonoscloudPrivateCrossconnectConnectableDatacenters" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters()
```


### DataIonoscloudPrivateCrossconnectPeers <a name="DataIonoscloudPrivateCrossconnectPeers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers()
```


### DataIonoscloudPrivateCrossconnectTimeouts <a name="DataIonoscloudPrivateCrossconnectTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudPrivateCrossconnectConnectableDatacentersList <a name="DataIonoscloudPrivateCrossconnectConnectableDatacentersList" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference <a name="DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters">DataIonoscloudPrivateCrossconnectConnectableDatacenters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudPrivateCrossconnectConnectableDatacenters
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters">DataIonoscloudPrivateCrossconnectConnectableDatacenters</a>

---


### DataIonoscloudPrivateCrossconnectPeersList <a name="DataIonoscloudPrivateCrossconnectPeersList" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudPrivateCrossconnectPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudPrivateCrossconnectPeersOutputReference <a name="DataIonoscloudPrivateCrossconnectPeersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterName">datacenter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanName">lan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers">DataIonoscloudPrivateCrossconnectPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `datacenter_name`<sup>Required</sup> <a name="datacenter_name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterName"></a>

```python
datacenter_name: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `lan_name`<sup>Required</sup> <a name="lan_name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudPrivateCrossconnectPeers
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers">DataIonoscloudPrivateCrossconnectPeers</a>

---


### DataIonoscloudPrivateCrossconnectTimeoutsOutputReference <a name="DataIonoscloudPrivateCrossconnectTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_private_crossconnect

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudPrivateCrossconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>]

---



