# `containerRegistryToken` Submodule <a name="`containerRegistryToken` Submodule" id="@cdktf/provider-ionoscloud.containerRegistryToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryToken <a name="ContainerRegistryToken" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token ionoscloud_container_registry_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  registry_id: str,
  expiry_date: str = None,
  id: str = None,
  save_password_to_file: str = None,
  scopes: typing.Union[IResolvable, typing.List[ContainerRegistryTokenScopes]] = None,
  status: str = None,
  timeouts: ContainerRegistryTokenTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.registryId">registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.expiryDate">expiry_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#id ContainerRegistryToken#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.savePasswordToFile">save_password_to_file</a></code> | <code>str</code> | Saves password to file. Only works on create. Takes as argument a file name, or a file path. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scopes">scopes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]</code> | scopes block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.status">status</a></code> | <code>str</code> | Can be one of enabled, disabled. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.registryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}.

---

##### `expiry_date`<sup>Optional</sup> <a name="expiry_date" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.expiryDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#id ContainerRegistryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `save_password_to_file`<sup>Optional</sup> <a name="save_password_to_file" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.savePasswordToFile"></a>

- *Type:* str

Saves password to file. Only works on create. Takes as argument a file name, or a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#save_password_to_file ContainerRegistryToken#save_password_to_file}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scopes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#scopes ContainerRegistryToken#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.status"></a>

- *Type:* str

Can be one of enabled, disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#status ContainerRegistryToken#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#timeouts ContainerRegistryToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putScopes">put_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetExpiryDate">reset_expiry_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetSavePasswordToFile">reset_save_password_to_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scopes` <a name="put_scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putScopes"></a>

```python
def put_scopes(
  value: typing.Union[IResolvable, typing.List[ContainerRegistryTokenScopes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putScopes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#create ContainerRegistryToken#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#default ContainerRegistryToken#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#update ContainerRegistryToken#update}.

---

##### `reset_expiry_date` <a name="reset_expiry_date" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetExpiryDate"></a>

```python
def reset_expiry_date() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_save_password_to_file` <a name="reset_save_password_to_file" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetSavePasswordToFile"></a>

```python
def reset_save_password_to_file() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerRegistryToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerRegistryToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerRegistryToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerRegistryToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList">ContainerRegistryTokenCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopes">scopes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList">ContainerRegistryTokenScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference">ContainerRegistryTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDateInput">expiry_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryIdInput">registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFileInput">save_password_to_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopesInput">scopes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDate">expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFile">save_password_to_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.credentials"></a>

```python
credentials: ContainerRegistryTokenCredentialsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList">ContainerRegistryTokenCredentialsList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopes"></a>

```python
scopes: ContainerRegistryTokenScopesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList">ContainerRegistryTokenScopesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeouts"></a>

```python
timeouts: ContainerRegistryTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference">ContainerRegistryTokenTimeoutsOutputReference</a>

---

##### `expiry_date_input`<sup>Optional</sup> <a name="expiry_date_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDateInput"></a>

```python
expiry_date_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registry_id_input`<sup>Optional</sup> <a name="registry_id_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryIdInput"></a>

```python
registry_id_input: str
```

- *Type:* str

---

##### `save_password_to_file_input`<sup>Optional</sup> <a name="save_password_to_file_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFileInput"></a>

```python
save_password_to_file_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopesInput"></a>

```python
scopes_input: typing.Union[IResolvable, typing.List[ContainerRegistryTokenScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerRegistryTokenTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>]

---

##### `expiry_date`<sup>Required</sup> <a name="expiry_date" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDate"></a>

```python
expiry_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `save_password_to_file`<sup>Required</sup> <a name="save_password_to_file" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFile"></a>

```python
save_password_to_file: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTokenConfig <a name="ContainerRegistryTokenConfig" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  registry_id: str,
  expiry_date: str = None,
  id: str = None,
  save_password_to_file: str = None,
  scopes: typing.Union[IResolvable, typing.List[ContainerRegistryTokenScopes]] = None,
  status: str = None,
  timeouts: ContainerRegistryTokenTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.registryId">registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.expiryDate">expiry_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#id ContainerRegistryToken#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.savePasswordToFile">save_password_to_file</a></code> | <code>str</code> | Saves password to file. Only works on create. Takes as argument a file name, or a file path. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.scopes">scopes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]</code> | scopes block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.status">status</a></code> | <code>str</code> | Can be one of enabled, disabled. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}.

---

##### `expiry_date`<sup>Optional</sup> <a name="expiry_date" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.expiryDate"></a>

```python
expiry_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#id ContainerRegistryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `save_password_to_file`<sup>Optional</sup> <a name="save_password_to_file" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.savePasswordToFile"></a>

```python
save_password_to_file: str
```

- *Type:* str

Saves password to file. Only works on create. Takes as argument a file name, or a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#save_password_to_file ContainerRegistryToken#save_password_to_file}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.scopes"></a>

```python
scopes: typing.Union[IResolvable, typing.List[ContainerRegistryTokenScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#scopes ContainerRegistryToken#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Can be one of enabled, disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#status ContainerRegistryToken#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.timeouts"></a>

```python
timeouts: ContainerRegistryTokenTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#timeouts ContainerRegistryToken#timeouts}

---

### ContainerRegistryTokenCredentials <a name="ContainerRegistryTokenCredentials" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenCredentials()
```


### ContainerRegistryTokenScopes <a name="ContainerRegistryTokenScopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenScopes(
  actions: typing.List[str],
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.actions">actions</a></code> | <code>typing.List[str]</code> | Example: ["pull", "push", "delete"]. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#type ContainerRegistryToken#type}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Example: ["pull", "push", "delete"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#actions ContainerRegistryToken#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#type ContainerRegistryToken#type}.

---

### ContainerRegistryTokenTimeouts <a name="ContainerRegistryTokenTimeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#create ContainerRegistryToken#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#default ContainerRegistryToken#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#update ContainerRegistryToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#create ContainerRegistryToken#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#default ContainerRegistryToken#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/container_registry_token#update ContainerRegistryToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTokenCredentialsList <a name="ContainerRegistryTokenCredentialsList" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerRegistryTokenCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerRegistryTokenCredentialsOutputReference <a name="ContainerRegistryTokenCredentialsOutputReference" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials">ContainerRegistryTokenCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTokenCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials">ContainerRegistryTokenCredentials</a>

---


### ContainerRegistryTokenScopesList <a name="ContainerRegistryTokenScopesList" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerRegistryTokenScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerRegistryTokenScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]]

---


### ContainerRegistryTokenScopesOutputReference <a name="ContainerRegistryTokenScopesOutputReference" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTokenScopes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>]

---


### ContainerRegistryTokenTimeoutsOutputReference <a name="ContainerRegistryTokenTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry_token

containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTokenTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>]

---



