# `s3BucketVersioning` Submodule <a name="`s3BucketVersioning` Submodule" id="@cdktf/provider-ionoscloud.s3BucketVersioning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketVersioning <a name="S3BucketVersioning" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning ionoscloud_s3_bucket_versioning}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioning(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  versioning_configuration: S3BucketVersioningVersioningConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | versioning_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#bucket S3BucketVersioning#bucket}

---

##### `versioning_configuration`<sup>Optional</sup> <a name="versioning_configuration" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.Initializer.parameter.versioningConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

versioning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#versioning_configuration S3BucketVersioning#versioning_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.putVersioningConfiguration">put_versioning_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.resetVersioningConfiguration">reset_versioning_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_versioning_configuration` <a name="put_versioning_configuration" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.putVersioningConfiguration"></a>

```python
def put_versioning_configuration(
  status: str,
  mfa_delete: str = None
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.putVersioningConfiguration.parameter.status"></a>

- *Type:* str

The versioning status of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#status S3BucketVersioning#status}

---

###### `mfa_delete`<sup>Optional</sup> <a name="mfa_delete" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.putVersioningConfiguration.parameter.mfaDelete"></a>

- *Type:* str

The MFA delete status of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#mfa_delete S3BucketVersioning#mfa_delete}

---

##### `reset_versioning_configuration` <a name="reset_versioning_configuration" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.resetVersioningConfiguration"></a>

```python
def reset_versioning_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3BucketVersioning resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioning.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioning.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioning.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioning.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3BucketVersioning resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3BucketVersioning to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3BucketVersioning that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketVersioning to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference">S3BucketVersioningVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.versioningConfigurationInput">versioning_configuration_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `versioning_configuration`<sup>Required</sup> <a name="versioning_configuration" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.versioningConfiguration"></a>

```python
versioning_configuration: S3BucketVersioningVersioningConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference">S3BucketVersioningVersioningConfigurationOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `versioning_configuration_input`<sup>Optional</sup> <a name="versioning_configuration_input" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.versioningConfigurationInput"></a>

```python
versioning_configuration_input: IResolvable | S3BucketVersioningVersioningConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioning.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketVersioningConfig <a name="S3BucketVersioningConfig" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioningConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  versioning_configuration: S3BucketVersioningVersioningConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | versioning_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#bucket S3BucketVersioning#bucket}

---

##### `versioning_configuration`<sup>Optional</sup> <a name="versioning_configuration" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningConfig.property.versioningConfiguration"></a>

```python
versioning_configuration: S3BucketVersioningVersioningConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

versioning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#versioning_configuration S3BucketVersioning#versioning_configuration}

---

### S3BucketVersioningVersioningConfiguration <a name="S3BucketVersioningVersioningConfiguration" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioningVersioningConfiguration(
  status: str,
  mfa_delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.status">status</a></code> | <code>str</code> | The versioning status of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.mfaDelete">mfa_delete</a></code> | <code>str</code> | The MFA delete status of the bucket. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

The versioning status of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#status S3BucketVersioning#status}

---

##### `mfa_delete`<sup>Optional</sup> <a name="mfa_delete" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.mfaDelete"></a>

```python
mfa_delete: str
```

- *Type:* str

The MFA delete status of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_versioning#mfa_delete S3BucketVersioning#mfa_delete}

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketVersioningVersioningConfigurationOutputReference <a name="S3BucketVersioningVersioningConfigurationOutputReference" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_bucket_versioning

s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resetMfaDelete">reset_mfa_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mfa_delete` <a name="reset_mfa_delete" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resetMfaDelete"></a>

```python
def reset_mfa_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDeleteInput">mfa_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDelete">mfa_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mfa_delete_input`<sup>Optional</sup> <a name="mfa_delete_input" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDeleteInput"></a>

```python
mfa_delete_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `mfa_delete`<sup>Required</sup> <a name="mfa_delete" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDelete"></a>

```python
mfa_delete: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3BucketVersioningVersioningConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

---



