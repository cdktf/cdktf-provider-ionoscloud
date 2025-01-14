# `volume` Submodule <a name="`volume` Submodule" id="@cdktf/provider-ionoscloud.volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Volume <a name="Volume" id="@cdktf/provider-ionoscloud.volume.Volume"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume ionoscloud_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.volume.Volume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

volume.NewVolume(scope Construct, id *string, config VolumeConfig) Volume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig">VolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.volume.Volume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.volume.Volume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.volume.Volume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig">VolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetBackupUnitId">ResetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetBus">ResetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetLicenceType">ResetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.volume.Volume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.volume.Volume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.volume.Volume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.volume.Volume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.volume.Volume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.volume.Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.volume.Volume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.volume.Volume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.volume.Volume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.volume.Volume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.volume.Volume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.volume.Volume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.volume.Volume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.volume.Volume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.volume.Volume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.volume.Volume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.volume.Volume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.volume.Volume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.volume.Volume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.volume.Volume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.volume.Volume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.volume.Volume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.volume.Volume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.volume.Volume.putTimeouts"></a>

```go
func PutTimeouts(value VolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.volume.Volume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts">VolumeTimeouts</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.volume.Volume.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupUnitId` <a name="ResetBackupUnitId" id="@cdktf/provider-ionoscloud.volume.Volume.resetBackupUnitId"></a>

```go
func ResetBackupUnitId()
```

##### `ResetBus` <a name="ResetBus" id="@cdktf/provider-ionoscloud.volume.Volume.resetBus"></a>

```go
func ResetBus()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.volume.Volume.resetId"></a>

```go
func ResetId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-ionoscloud.volume.Volume.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.volume.Volume.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetLicenceType` <a name="ResetLicenceType" id="@cdktf/provider-ionoscloud.volume.Volume.resetLicenceType"></a>

```go
func ResetLicenceType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.volume.Volume.resetName"></a>

```go
func ResetName()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.volume.Volume.resetSshKeyPath"></a>

```go
func ResetSshKeyPath()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-ionoscloud.volume.Volume.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.volume.Volume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-ionoscloud.volume.Volume.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.volume.Volume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

volume.Volume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.volume.Volume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.volume.Volume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

volume.Volume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.volume.Volume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.volume.Volume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

volume.Volume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.volume.Volume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.volume.Volume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

volume.Volume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.volume.Volume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.volume.Volume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Volume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.volume.Volume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Volume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.volume.Volume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Volume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.bootServer">BootServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.cpuHotPlug">CpuHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.discVirtioHotPlug">DiscVirtioHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.discVirtioHotUnplug">DiscVirtioHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.nicHotPlug">NicHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.nicHotUnplug">NicHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.ramHotPlug">RamHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.sshkey">Sshkey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference">VolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.backupUnitIdInput">BackupUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.busInput">BusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.licenceTypeInput">LicenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.bus">Bus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.licenceType">LicenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.volume.Volume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.volume.Volume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.volume.Volume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.volume.Volume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.volume.Volume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.volume.Volume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.volume.Volume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.volume.Volume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.volume.Volume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.volume.Volume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.volume.Volume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.volume.Volume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.volume.Volume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.volume.Volume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BootServer`<sup>Required</sup> <a name="BootServer" id="@cdktf/provider-ionoscloud.volume.Volume.property.bootServer"></a>

```go
func BootServer() *string
```

- *Type:* *string

---

##### `CpuHotPlug`<sup>Required</sup> <a name="CpuHotPlug" id="@cdktf/provider-ionoscloud.volume.Volume.property.cpuHotPlug"></a>

```go
func CpuHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.volume.Volume.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `DiscVirtioHotPlug`<sup>Required</sup> <a name="DiscVirtioHotPlug" id="@cdktf/provider-ionoscloud.volume.Volume.property.discVirtioHotPlug"></a>

```go
func DiscVirtioHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiscVirtioHotUnplug`<sup>Required</sup> <a name="DiscVirtioHotUnplug" id="@cdktf/provider-ionoscloud.volume.Volume.property.discVirtioHotUnplug"></a>

```go
func DiscVirtioHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-ionoscloud.volume.Volume.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-ionoscloud.volume.Volume.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `NicHotPlug`<sup>Required</sup> <a name="NicHotPlug" id="@cdktf/provider-ionoscloud.volume.Volume.property.nicHotPlug"></a>

```go
func NicHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotUnplug`<sup>Required</sup> <a name="NicHotUnplug" id="@cdktf/provider-ionoscloud.volume.Volume.property.nicHotUnplug"></a>

```go
func NicHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.volume.Volume.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `RamHotPlug`<sup>Required</sup> <a name="RamHotPlug" id="@cdktf/provider-ionoscloud.volume.Volume.property.ramHotPlug"></a>

```go
func RamHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Sshkey`<sup>Required</sup> <a name="Sshkey" id="@cdktf/provider-ionoscloud.volume.Volume.property.sshkey"></a>

```go
func Sshkey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.volume.Volume.property.timeouts"></a>

```go
func Timeouts() VolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference">VolumeTimeoutsOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupUnitIdInput`<sup>Optional</sup> <a name="BackupUnitIdInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.backupUnitIdInput"></a>

```go
func BackupUnitIdInput() *string
```

- *Type:* *string

---

##### `BusInput`<sup>Optional</sup> <a name="BusInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.busInput"></a>

```go
func BusInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `LicenceTypeInput`<sup>Optional</sup> <a name="LicenceTypeInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.licenceTypeInput"></a>

```go
func LicenceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.sshKeyPathInput"></a>

```go
func SshKeyPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-ionoscloud.volume.Volume.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.volume.Volume.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.volume.Volume.property.backupUnitId"></a>

```go
func BackupUnitId() *string
```

- *Type:* *string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.volume.Volume.property.bus"></a>

```go
func Bus() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.volume.Volume.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.volume.Volume.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.volume.Volume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.volume.Volume.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.volume.Volume.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `LicenceType`<sup>Required</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.volume.Volume.property.licenceType"></a>

```go
func LicenceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.volume.Volume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-ionoscloud.volume.Volume.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.volume.Volume.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.volume.Volume.property.sshKeyPath"></a>

```go
func SshKeyPath() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.volume.Volume.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.volume.Volume.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.Volume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.volume.Volume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VolumeConfig <a name="VolumeConfig" id="@cdktf/provider-ionoscloud.volume.VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

&volume.VolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	DiskType: *string,
	ServerId: *string,
	Size: *f64,
	AvailabilityZone: *string,
	BackupUnitId: *string,
	Bus: *string,
	Id: *string,
	ImageName: *string,
	ImagePassword: *string,
	LicenceType: *string,
	Name: *string,
	SshKeyPath: *[]*string,
	SshKeys: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.volume.VolumeTimeouts,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#datacenter_id Volume#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.diskType">DiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#disk_type Volume#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#server_id Volume#server_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#size Volume#size}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#availability_zone Volume#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#backup_unit_id Volume#backup_unit_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.bus">Bus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#bus Volume#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#image_name Volume#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#image_password Volume#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.licenceType">LicenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#licence_type Volume#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#name Volume#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#ssh_key_path Volume#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#ssh_keys Volume#ssh_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts">VolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#user_data Volume#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#datacenter_id Volume#datacenter_id}.

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#disk_type Volume#disk_type}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#server_id Volume#server_id}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#size Volume#size}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#availability_zone Volume#availability_zone}.

---

##### `BackupUnitId`<sup>Optional</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.backupUnitId"></a>

```go
BackupUnitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#backup_unit_id Volume#backup_unit_id}.

---

##### `Bus`<sup>Optional</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.bus"></a>

```go
Bus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#bus Volume#bus}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#image_name Volume#image_name}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#image_password Volume#image_password}.

---

##### `LicenceType`<sup>Optional</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.licenceType"></a>

```go
LicenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#licence_type Volume#licence_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#name Volume#name}.

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.sshKeyPath"></a>

```go
SshKeyPath *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#ssh_key_path Volume#ssh_key_path}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#ssh_keys Volume#ssh_keys}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.timeouts"></a>

```go
Timeouts VolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts">VolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#timeouts Volume#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.volume.VolumeConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#user_data Volume#user_data}.

---

### VolumeTimeouts <a name="VolumeTimeouts" id="@cdktf/provider-ionoscloud.volume.VolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.volume.VolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

&volume.VolumeTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#create Volume#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#default Volume#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#delete Volume#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#update Volume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#create Volume#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#default Volume#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#delete Volume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.volume.VolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/volume#update Volume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VolumeTimeoutsOutputReference <a name="VolumeTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/volume"

volume.NewVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.volume.VolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



