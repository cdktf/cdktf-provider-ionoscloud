# `autoCertificate` Submodule <a name="`autoCertificate` Submodule" id="@cdktf/provider-ionoscloud.autoCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoCertificate <a name="AutoCertificate" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate ionoscloud_auto_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

autocertificate.NewAutoCertificate(scope Construct, id *string, config AutoCertificateConfig) AutoCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig">AutoCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig">AutoCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.putTimeouts"></a>

```go
func PutTimeouts(value AutoCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts">AutoCertificateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetName"></a>

```go
func ResetName()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetSubjectAlternativeNames"></a>

```go
func ResetSubjectAlternativeNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutoCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

autocertificate.AutoCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

autocertificate.AutoCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

autocertificate.AutoCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

autocertificate.AutoCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutoCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutoCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutoCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutoCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.lastIssuedCertificateId">LastIssuedCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference">AutoCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LastIssuedCertificateId`<sup>Required</sup> <a name="LastIssuedCertificateId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.lastIssuedCertificateId"></a>

```go
func LastIssuedCertificateId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.timeouts"></a>

```go
func Timeouts() AutoCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference">AutoCertificateTimeoutsOutputReference</a>

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.subjectAlternativeNamesInput"></a>

```go
func SubjectAlternativeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoCertificateConfig <a name="AutoCertificateConfig" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

&autocertificate.AutoCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CommonName: *string,
	KeyAlgorithm: *string,
	Location: *string,
	ProviderId: *string,
	Id: *string,
	Name: *string,
	SubjectAlternativeNames: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.autoCertificate.AutoCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.commonName">CommonName</a></code> | <code>*string</code> | The common name (DNS) of the certificate to issue. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | The key algorithm used to generate the certificate. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.location">Location</a></code> | <code>*string</code> | The location of the auto-certificate. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.providerId">ProviderId</a></code> | <code>*string</code> | The certificate provider used to issue the certificates. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#id AutoCertificate#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.name">Name</a></code> | <code>*string</code> | A certificate name used for management purposes. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | Optional additional names to be added to the issued certificate. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts">AutoCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

The common name (DNS) of the certificate to issue.

The common name needs to be part of a zone in IONOS Cloud DNS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#common_name AutoCertificate#common_name}

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

The key algorithm used to generate the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#key_algorithm AutoCertificate#key_algorithm}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the auto-certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#location AutoCertificate#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

The certificate provider used to issue the certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#provider_id AutoCertificate#provider_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#id AutoCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A certificate name used for management purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#name AutoCertificate#name}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.subjectAlternativeNames"></a>

```go
SubjectAlternativeNames *[]*string
```

- *Type:* *[]*string

Optional additional names to be added to the issued certificate.

The additional names needs to be part of a zone in IONOS Cloud DNS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#subject_alternative_names AutoCertificate#subject_alternative_names}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateConfig.property.timeouts"></a>

```go
Timeouts AutoCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts">AutoCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#timeouts AutoCertificate#timeouts}

---

### AutoCertificateTimeouts <a name="AutoCertificateTimeouts" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

&autocertificate.AutoCertificateTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#create AutoCertificate#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#default AutoCertificate#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#delete AutoCertificate#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#update AutoCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#create AutoCertificate#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#default AutoCertificate#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#delete AutoCertificate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/auto_certificate#update AutoCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoCertificateTimeoutsOutputReference <a name="AutoCertificateTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificate"

autocertificate.NewAutoCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoCertificate.AutoCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



